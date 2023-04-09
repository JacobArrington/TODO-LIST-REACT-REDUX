import React from "react";
import { connect } from "react-redux";


const todoList = ({task}) => (
    <ul>
        {task.map(task =>(
            <li key={task.id}>{task.title}</li>
        ))}
    </ul>
)


const mapStateToProps = state =>({
    task: state.tasks
})

export default connect(mapStateToProps)(todoList)
