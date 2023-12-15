import { Tldraw } from '@tldraw/tldraw'

import '@tldraw/tldraw/tldraw.css'

export default function Editor() {
    return (
        <div className="tldraw__editor w-full absolute top-[152px]"
            style={{ height: `calc(100vh - 152px - env(safe-area-inset-bottom))` }}>
            <Tldraw />
        </div>
    )
}