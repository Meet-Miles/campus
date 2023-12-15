import { Tldraw } from '@tldraw/tldraw'

import '@tldraw/tldraw/tldraw.css'

export default function Editor() {
    return (
        <div className="tldraw__editor w-full absolute top-[152px] bottom-0" style={{ height: `100%` }}>
            <Tldraw />
        </div>
    )
}