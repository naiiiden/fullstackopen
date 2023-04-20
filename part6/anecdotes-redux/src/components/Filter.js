import { filterChange } from "../reducers/filterReducer";
import { useDispatch } from "react-redux";

const Filter = () => {
    const dispatch = useDispatch()
  
    return (
        <div style={{marginBottom: "1rem"}}>
            filter <input type="text" name="filter" onChange={({target}) => dispatch(filterChange(target.value))}/>
        </div>
    )
}

export default Filter;