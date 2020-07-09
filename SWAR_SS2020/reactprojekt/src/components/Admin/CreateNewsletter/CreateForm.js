import React, {Component, useState} from 'react'
import CreateNews from "./CreateNews";


function CreateForm(props) {
    return (
        <CreateNews addArticle={props.addArticle}/>
    )
}

export default CreateForm
