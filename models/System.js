'use strict';

class System {
  constructor() {
    this.processors = 0;
    this.freeMemory = 0;
    this.maximumMemory = 0;
    this._totalMemory = 0;
    this._freeSpace = 0;
    this.usableSpace = 0;
    this.freeSpace = 0;
    this.networkAdapters = [];
    this.environmentVariables = [];
  }

  get numberOfProcessors() {
    return this.processors.length;
  }

  get processorSpeed() {
    return Math.round(this.processors[1].speed / 10) / 100;
  }

  get totalMemory() {
    return Math.round((this._totalMemory / (1024*1024)) * 100) / 100;
  }

  set totalMemory(memory) {
    this._totalMemory = memory;
  }

  get freeMemory() {
    return Math.round((this._freeMemory / (1024*1024)) * 100) / 100;
  }

  set freeMemory(memory) {
    this._freeMemory = memory;
  }

  get allocatedMemory() {
    return Math.round((this._allocatedMemory / (1024*1024)) * 100) / 100;
  }

  set allocatedMemory(memory) {
    this._allocatedMemory = memory;
  }

  get availableDiskSpace() {
    return Math.round((this._availableDiskSpace / (1024*1024*1024)) * 100) / 100;
  }

  set availableDiskSpace(memory) {
    this._availableDiskSpace = memory;
  }

  get freeDiskSpace() {
    return Math.round((this._freeDiskSpace / (1024*1024*1024)) * 100) / 100;
  }

  set freeDiskSpace(memory) {
    this._freeDiskSpace = memory;
  }

  get totalDiskSpace() {
    return Math.round((this._totalDiskSpace / (1024*1024*1024)) * 100) / 100;
  }

  set totalDiskSpace(memory) {
    this._totalDiskSpace = memory;
  }
}

module.exports = System;
