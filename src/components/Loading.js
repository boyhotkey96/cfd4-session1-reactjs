import React from 'react'
import ReactDOM from 'react-dom'
import '../assets/css/style.scss'

export default function Loading() {
    return ReactDOM.createPortal(
        <div className="pageLoading">
            <div>

            </div>
        </div>,
        document.getElementById('modal-root')
    )
}