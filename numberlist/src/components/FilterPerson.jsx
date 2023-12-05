export default function FilterPerson(props) {
    return (
        <>
            <div>
                Find name:<input onChange={props.handleFilterName} value={props.filterName} /><br /><br />
            </div>
        </>
    )
}