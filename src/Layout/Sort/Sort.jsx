import React, { useState } from "react";
import './sort.scss';

const Sort = () => {
  const [active, setActive] = useState(0);

  const list = [{value: 'დამატების თარიღი'}, {value: 'ვადის ამოწურვით'}, {value: 'ფასით'}, {value: 'ანბანით'}]

  return (
    <>
      <div className="sort--mb">
        <button>
          სორტირება
          <i className="icon-filter"></i>
        </button>
        <button>
          სორტირება
          <i className="icon-Dropdown---2"></i>
        </button>
      </div>
      <div className="sort--dsk">
        <div className='sort--dsk--left'>
          <h6>სორტირება:</h6>
          <ul>
            {list.map((item, id) => (
              <li
                key={id}
                onClick={() => setActive(id)}
                className={id === active ? 'active' : null}
              >
                {item.value}{id === active ? <i className="icon-sort"></i> : null}
              </li>
            ))}
          </ul>
        </div>
        <p>როგორ გავყიდო დომენი?</p>
      </div>
    </>
  );
};

export default Sort;
