import { Tldraw } from '@tldraw/tldraw'

import '@tldraw/tldraw/tldraw.css'

export default function Editor() {
    return (
        <div className="tldraw__editor w-full" style={{ height: `calc(100vh - 152px)` }}>
            <Tldraw />
        </div>
    )
}