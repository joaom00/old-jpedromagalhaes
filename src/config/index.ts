import * as constants from './constants'

const config = {
  get: (identifier: string) => {
    if (!(identifier in constants)) {
      return null
    }

    return constants[identifier]
  }
}

export default config
