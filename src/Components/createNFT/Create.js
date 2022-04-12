import React from 'react'
import CreateHeader from './CreateHeader'
import CreateForm from './CreateForm'
import SubmitButton from './SubmitButton'
import CreateCollection from './CreateCollection'
import PropModal from './PropModal'

const Create = () => {
    return (
        <>
            <div style={{margin:"5% 15%"}}>
                <CreateHeader />
                <CreateForm />
                <SubmitButton/>
                <CreateCollection/>
            </div>
        </>
    )
}

export default Create