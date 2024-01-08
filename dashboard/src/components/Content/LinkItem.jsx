import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function LinkItem({name}){
    return (
      <Link to={`/productos/${name}`}>
        <button
          type="button"
          className="list-group-item list-group-item-action text-center">
              {name}
        </button>
      </Link>
            
    )
}

LinkItem.propTypes = {
    name: PropTypes.string.isRequired,
};

export default LinkItem

