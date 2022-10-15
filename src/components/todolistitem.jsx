export function TodoListItem (props){
  
return (
<li>
    <input
    id={props.item.name}
        type="checkbox"
        checked={props.item.isComplete}
        onChange={(event) => props.onTaskChanged(event, props.item)}
    />
    {props.item.name}
</li>
)


}
