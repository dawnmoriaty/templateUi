import { createFileRoute } from '@tanstack/react-router'
import React from 'react'

const Users = () => {
    return (
        <div>index</div>
    )
}

export const Route = createFileRoute('/users/')({
    component: Users,
})