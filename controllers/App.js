'use strict';

const os = require('os');
const process = require('process');
const disk = require('diskusage');

const NetworkInterface = require('../models/NetworkInterface.js');
const IPAddress = require('../models/IPAddress.js');

class App {
  static loadInformation(system) {

    os.hostname() !== undefined ? system.hostname = os.hostname() : null;
    os.uptime() !== undefined ? system.uptime = os.uptime() : null;
    os.freemem() !== undefined ? system.freeMemory = os.freemem() : null;
    os.totalmem() !== undefined ? system.totalMemory = os.totalmem() : null;
    os.cpus() !== undefined ? system.processors = os.cpus() : null;
    os.loadavg() !== undefined ? system.usage = os.loadavg() : null;

    process.memoryUsage().rss !== undefined ? system.allocatedMemory = process.memoryUsage().rss : null;

    // Operating System specific Information
    os.type() !== undefined ? system.operatingSystem = os.type() : null;
    os.release() !== undefined ? system.operatingSystemVersion = os.release() : null;

    os.arch() !== undefined ? system.operatingSystemArchitecture = os.arch() : null;
    os.platform() !== undefined ? system.operatingSystemPlatform = os.platform() : null;


    os.homedir() !== undefined ? system.currentUserDirectory = os.homedir() : null;

    os.uptime() !== undefined ? system.uptime = os.uptime() : null;

    // Network information
    let networkInterfaces = os.networkInterfaces();
    for(let nwIf in networkInterfaces) {
      let networkInterface = new NetworkInterface();
      networkInterface.name = nwIf;

      for(let address of networkInterfaces[nwIf]) {
        let ipAddress = new IPAddress();

         address.address !== undefined ? ipAddress.address = address.address : null;
         address.netmask !== undefined ? ipAddress.netmask = address.netmask : null;
         address.family !== undefined ? ipAddress.family = address.family : null;
         address.mac !== undefined ? ipAddress.mac = address.mac : null;
         address.internal !== undefined ? ipAddress.internal = address.internal : null;

        networkInterface.addAddress(ipAddress);

        networkInterface.mac = address.mac;
      }

      system.networkInterfaces = networkInterfaces;

    }

    // Disk Information
    let path = os.platform() === 'win32' ? 'c:' : '/';

    try {
        let info = disk.checkSync(path);
        system.availableDiskSpace = info.available;
        system.freeDiskSpace = info.free;
        system.totalDiskSpace = info.total;
    }
    catch (err) {
        console.log(err);
    }

    // Environment Variables
    system.environmentVariables = process.env;

    return system;
  }
}

module.exports = App;
