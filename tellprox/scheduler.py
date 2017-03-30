from threading import Timer
import time
import datetime

from configObserver import ConfigObserver
import bottle_helpers as bh


class Scheduler(object):
    nextJob = []
    timer = None

    def __init__(self, config, tellstick):
        self.config = config
        self.jobs = config['jobs']
        self.start()
        self.tellstick = tellstick;

        # Subscribe to changes in configs
        class JobsWatcher(object):
            def notify(subself, observable, key):
                print "scheduler key changed"
                self.start()

        watcher = JobsWatcher()
        config.observeKey('scheduler', watcher)
        config.observeKey('jobs', watcher)

    def stop(self):
        if self.timer:
            self.timer.cancel()
            self.timer = None

    def start(self):
        self.stop()

        self.calcAllRunTimes()
        if self.config['scheduler']:
            self.updateAndRunTimers()

    def calcSoonestRunTime(self):
        activeJobs = [
            job['nextRunTime']
            for job in self.jobs.itervalues()
            if job['active'] == '1'
            ]

        if len(activeJobs) == 0:
            return None
        return min(activeJobs)

    def getJobsByRunTime(self, searchTime):
        return [
            job for job in self.jobs.itervalues()
            if job['nextRunTime'] == searchTime
            ]

    def updateAndRunTimers(self):
        nowInEpoch = bh.dateTimeToEpoch(datetime.datetime.now())

        if len(self.jobs) > 0:
            soonestTime = self.calcSoonestRunTime()
            if soonestTime:
                self.nextJob = self.getJobsByRunTime(soonestTime)

                timeToNextJob = soonestTime - nowInEpoch
                if timeToNextJob <= 0:
                    print "FATAL ERROR: " + str(soonestTime) + " & " + str(nowInEpoch)
                    return
                print "Next job scheduled for " + str(datetime.datetime.fromtimestamp(soonestTime))
                self.timer = Timer(timeToNextJob, self.runCommand, ())
                self.timer.start()
                return
        print "Scheduler has no jobs to run"

    def runJob(self, job):
        deviceId = int(job['deviceId'])
        method = int(job['method'])
        value = int(job['methodValue'])
        print self.tellstick.device_command('', deviceId, value, method)

    def runCommand(self):
        if len(self.nextJob) > 0:
            for job in self.nextJob:
                self.runJob(job)

        self.calcAllRunTimes()
        self.updateAndRunTimers()

    def calcAllRunTimes(self):
        for id, job in self.jobs.iteritems():
            bh.calcNextRunTime(job)
