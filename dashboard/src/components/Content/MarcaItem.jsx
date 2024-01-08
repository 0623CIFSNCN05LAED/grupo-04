import propTypes from 'prop-types'

function BrandItem ({name}){
    return (
        <div className="box-content">
        <span className="big">{name}</span>
      </div>
    )
}

BrandItem.propTypes = {
    name: propTypes.string.isRequired
}

export default BrandItem