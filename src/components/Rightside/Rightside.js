import React from 'react'
import './Rightside.css'

const Rightside = () => {
  return (
    <div>
      <div className="col-md-10 right">
        <div className="card">
          <div className="card-header">
            Overflow Blog
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
          </div>
        <div className="card">
          <div className="card-header">
            Featured
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Watched Tags</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Watch a tag</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightside