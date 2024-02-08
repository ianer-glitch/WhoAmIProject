export default class LocalStorageBaseController {
  protected static setLocalStorage(key: string, payload: any): void {
    localStorage.setItem(key, JSON.stringify(payload))
  }

  protected static getLocalStorage(key: string): any {
    return JSON.parse(localStorage.getItem(key) ?? '{}')
  }
}
