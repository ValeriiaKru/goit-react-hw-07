import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

function Searchbox() {
    const dispatch = useDispatch();
    const filterValue = useSelector(selectNameFilter);
    const handleFilter = (event) => {
        const value = event.target.value;
        const action = changeFilter(value);
        dispatch(action);
}

    return (
        <label className={css.searchContainer}>
            <span className={css.label}>Find contacts by name</span>
            <input
                className={css.searchBarInput}
                type="text"
                name="searchBar"
                placeholder="type..."
                value={filterValue}
                onChange={handleFilter}
            />
        </label>
    );
}

export default Searchbox;