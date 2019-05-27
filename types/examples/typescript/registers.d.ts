/// <reference types="w3c-web-usb" />
export interface USB {
    requestDevice(options?: USBDeviceRequestOptions): Promise<USBDevice>;
}
export declare class Registers {
    private usb;
    constructor(usb?: USB);
    read(count: number): Promise<string[]>;
}
