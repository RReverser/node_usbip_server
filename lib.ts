export const UsbIpCommands = {
  /** (0x8005) Retrieve the list of exported USB devices. */
  OP_REQ_DEVLIST: [0x80, 0x05],
  /** (0x0005) Reply with the list of exported USB devices. */
  OP_REP_DEVLIST: [0x00, 0x05],
  /** (0x8003) Request to import (attach) a remote USB device. */
  OP_REQ_IMPORT: [0x80, 0x03],
  /** (0x0003) Reply to import (attach) a remote USB device. */
  OP_REP_IMPORT: [0x00, 0x03],
  /** (0x00000001) Submit an URB */
  USBIP_CMD_SUBMIT: [0x00, 0x00, 0x00, 0x01],
  /** (0x00000003) Reply for submitting an URB */
  USBIP_RET_SUBMIT: [0x00, 0x00, 0x00, 0x03],
  /** (0x00000002) Unlink an URB */
  USBIP_CMD_UNLINK: [0x00, 0x00, 0x00, 0x02],
  /** (0x00000004) Reply for URB unlink */
  USBIP_RET_UNLINK: [0x00, 0x00, 0x00, 0x04]
} as const;

export const enum UsbIpDirections {
  out = 0,
  in = 1
}

export const enum UsbIpTransferTypes {
  control = 0b0000,
  isochronous = 0b0001,
  bulk = 0b0010,
  interrupt = 0b0011
}

export namespace BmRequestTypes {
  export const enum Directions {
    deviceToHost = 0 << 7,
    hostToDevice = 1 << 7
  }

  export const enum TypeTypes {
    standard = 0 << 5,
    class = 1 << 5,
    vendor = 2 << 5,
    reserved = 3 << 5
  }

  export const enum Recipients {
    device = 0,
    interface = 1,
    endpoint = 2,
    other = 3
  }
}

export namespace BRequests {
  export const enum Standard {
    getStatus = 0x00,
    clearFeature = 0x01,
    setFeature = 0x03,
    setAddress = 0x05,
    getDescriptor = 0x06,
    setDescriptor = 0x07,
    getConfiguration = 0x08,
    setConfiguration = 0x09,
    getInterface = 0x0a,
    setInterface = 0x0b,
    synchFrame = 0x12
  }

  export const enum Class {
    cdcSetLineCoding = 0x20,
    cdcSetControlLineState = 0x22,

    hidSetIdle = 0x0a
  }
}

export const enum DescriptorTypes {
  device = 0x01,
  config = 0x02,
  string = 0x03,
  interface = 0x04,
  endpoint = 0x05
}

export const enum InterfaceClasses {
  communicationsAndCdcControl = 0x02,
  hid = 0x03
}

export const enum Parities {
  none = 0,
  odd = 1,
  even = 2,
  mark = 3,
  space = 4
}

export const enum StopBits {
  one = 0,
  onePointFive = 1,
  two = 2
}

export const enum ErrorCodes {
  ECONNRESET = 54
}
