export class AppSettingFactory {
  colorScheme: ColorScheme = "dark"
  version = "0.0"

  setColorScheme(colorScheme: ColorScheme) {
    this.colorScheme = colorScheme
  }

  updateVersion(version: string) {
    this.version = version
  }
}
