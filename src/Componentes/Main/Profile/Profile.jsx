import "./Profile.css"

function Profile() {
    return ( 
        <>
            <div className="profile site__section">
                <img className="profile__image" src="src/assets/images/avatar-perfil.png" alt="Avatar" />
                
                <div className="profile__details">
                    <h1 className="profile__name" id="h1temporal">El diavlo</h1>
                    <button
                    aria-label="Edit traveler profile"
                    className="profile__edit-btn"
                    type="button"
                    id="button-edit"
                    ></button>
                    <p className="profile__bio">Ando suelto, pa 🔥🔥</p>
                </div>
                <button aria-label="Add new place" className="profile__add-place-btn" type="button"></button>
            </div>
        </>
     );
}

export default Profile;