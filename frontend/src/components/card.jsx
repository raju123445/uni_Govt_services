import { getUserSession } from '../utils/auth';
const card = (service) => {
  const isLoggedIn = getUserSession();
  return (
    <div>
      <div className="card bg-black w-96 shadow-sm hover:-translate-y-2 shadow-lg transition duration-300 ">
              <figure className=" pt-10">
                <img
                  src={service.image}
                  alt="Electrisity"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{service.name}</h2>
                <p>
                  {service.note}
                </p>
                {
                  isLoggedIn ? (
                    <div className="card-actions">
                  <button className="btn btn-primary">{service.action}</button>
                </div> 
                  ) : ("")
                }
              </div>
            </div>
          </div>
  )
}

export default card
