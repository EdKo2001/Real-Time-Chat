import React, { useState, useRef } from 'react'
import { Button, Grid, TextField, Avatar } from '@material-ui/core'
import { useContent } from '../contexts/Context'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { firestore } from '../firebase'

export default function Chat() {

    const { currentUser, sendMessage } = useContent()
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )
    const contentRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await sendMessage(value)
        contentRef.current.scrollIntoView({ behavior: "smooth", block: "end" })
        setValue('')
    }

    return (
        <Grid container justify="center" style={{ height: window.innerHeight - 50 }}>
            <div style={{ width: '80%', height: '70vh', border: '1px solid gray', overflowY: 'auto' }} >
                <div className="content" ref={contentRef}>
                    {loading ? '' :
                        messages.map((message, index) =>
                            <div style={{
                                margin: 10,
                                border: currentUser.uid === message.uid ? '2px solid green' : '2px dashed red',
                                marginLeft: currentUser.uid === message.uid ? 'auto' : '10px',
                                width: 'fit-content',
                                padding: 5,
                            }} key={index}>
                                <Grid container alignItems="center">
                                    <Avatar src={message.photoURL} />
                                    <div>{message.displayName}</div>
                                </Grid>
                                <div>{message.text}</div>
                            </div>
                        )}
                </div>
            </div>
            <Grid container direction="column" alignItems="flex-end" style={{ width: '80%' }}>
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <TextField fullWidth variant="outlined" value={value} onChange={e => setValue(e.target.value)} required />
                    <Button type="submit" variant="outlined" style={{ marginTop: 20 }}>Отправить</Button>
                </form>
            </Grid>
        </Grid>
    )
}
