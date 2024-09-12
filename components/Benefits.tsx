export default function Benefits() {
  return (
    <div className="benefits md:h-screen mb-8">
      <ul className="px-4 md:w-3/5 mx-auto flex flex-col justify-evenly h-full">
        <li className="p-2 rounded-xl border mb-2 md:mb-5 items-center md:text-2xl font-medium md:text-center md:min-h-24 flex justify-center">
          <div>
            <div className="items-center flex mb-2 justify-center">
              <div className="me-3">🕴 </div>
              Attirez de nouveaux clients et proposez une nouvelles expériences
            </div>
            <small className="text-sm text-gray-500 font-normal block text-justify md:text-center md:text-base hidden md:block">
              Vos clients préfèrent généralement commander sans stress depuis
              leur smartphone plutôt que de faire la queue
            </small>
          </div>
        </li>
        <li className="p-2 rounded-xl border mb-2 md:mb-5 items-center md:text-2xl font-medium md:text-center md:min-h-24 flex justify-center">
          <div>
            <div className="items-center flex mb-2 justify-center">
              <div className="me-3">📱 </div>
              Gagnez du temps en laissant vos clients commander en autonomie
            </div>
            <small className="text-sm text-gray-500 font-normal block text-justify md:text-center md:text-base hidden md:block">
              Soyez plus productif, concrentrez vous sur votre coeur
              d&apos;activité, recevez les commandes sur votre tablette, vous
              n&apos;avez plus qu&apos;a lancer les préparations
            </small>
          </div>
        </li>
        <li className="p-2 rounded-xl border mb-2 md:mb-5 items-center md:text-2xl font-medium md:text-center md:min-h-24 flex justify-center">
          <div>
            <div className="items-center flex mb-2 justify-center">
              <div className="me-3">✅ </div>Visualisez rapidement et facilement
              le contenu des commandes
            </div>
            <small className="text-sm text-gray-500 font-normal block text-justify md:text-center md:text-base hidden md:block">
              Soyez plus productif, concrentrez vous sur votre coeur
              d&apos;activité, recevez les commandes sur votre tablette, vous
              n&apos;avez plus qu&apos;a lancer les préparations
            </small>
          </div>
        </li>
        <li className="p-2 rounded-xl border mb-2 md:mb-5 items-center md:text-2xl font-medium md:text-center md:min-h-24 flex justify-center">
          <div>
            <div className="items-center flex mb-2 justify-center">
              <div className="me-3">📈 </div>Augmentation du panier moyen +10 à
              30%
            </div>
            <small className="text-sm text-gray-500 font-normal block text-justify md:text-center md:text-base hidden md:block">
              Soyez plus productif, concrentrez vous sur votre coeur
              d&apos;activité, recevez les commandes sur votre tablette, vous
              n&apos;avez plus qu&apos;a lancer les préparations
            </small>
          </div>
        </li>
        <li className="p-2 rounded-xl border mb-2 md:mb-5 items-center md:text-2xl font-medium md:text-center md:min-h-24 flex justify-center">
          <div>
            <div className="items-center flex mb-2 justify-center">
              <div className="me-3">🤝 </div>Mis en relation avec des
              producteurs locaux
            </div>
            <small className="text-sm text-gray-500 font-normal block text-justify md:text-center md:text-base hidden md:block">
              Accèdez facilement aux produits des maraicher de votre région,
              commandez leur produits depuis l&apos;application pour proposez
              des produits en circuit-court et de qualité à vos clients tout en
              valorisant l&apos;économie local
            </small>
          </div>
        </li>
      </ul>
    </div>
  );
}
