declare global {
    interface Window {
        mcraft: {
            ui: {
                registerReactWrapper: (name: string, section: string, component: React.ComponentType<any>) => void
            }
            classNames(...args: string[]): string
            framerMotion: {
                motion: typeof import('framer-motion').motion
            }
            valtio: {
                useSnapshot: <T>(snapshot: T) => T
            }
        }
        loadSound: (path: string, contents?: string) => Promise<unknown>
        playSound: (sound: string, volume?: number) => void
        miscUiState: {
            hadConnected: boolean
        }
        serverMetadataConnect: undefined | Record<string, any>
        builtinComponents: {
            Button: React.ComponentType<any>
        }
        setLoadingScreenStatus: (status: string) => void
    }
}

export {}
