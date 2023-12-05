export default function AddPerson(props) {
    //state

    //handle
    const handleName = (event) => {
        props.setNewName(event.target.value)
    }
    const handleNumber = (event) => {
        props.setNewNumber(event.target.value)
    }
    return (
        <>
            <form onSubmit={props.addPerson}>
                <div>
                    name: <input onChange={handleName} value={props.newName} /><br /><br />
                </div>
                <div>
                    number: <input onChange={handleNumber} value={props.newNumber} /><br /><br />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>
    )
}