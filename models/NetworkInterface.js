'use strict';

class NetworkInterfaces {
  constructor() {
    this.name = undefined;
    this.mac = undefined;
    this.addresses = [];
  }

  addAddress(address) {
    this.addresses.push(address);
  }
}

module.exports = NetworkInterfaces;
