import NavbarComponent from './Components/NavBarComponent';
import ProfileComponent from './Components/ProfileComponent';
import FormationComponent from './Components/FormationComponent';
import HistoryComponent from './Components/HistoryComponent';
import ProyectsComponent from './Components/ProyectsComponent';
import FooterComponent from './Components/FooterComponent';

export default function Page() {
  return (
    <main className={`
    w-full
    dark:bg-kang-gray
    bg-kang-white
    grid
    grid-areas-layout
    overflow-x-hidden
    `}>
      <NavbarComponent className='grid-in-navbar fixed mt-9 m-2 z-10'  />
      <ProfileComponent className='grid-in-profile' />
      <FormationComponent className='grid-in-formation' />
      <HistoryComponent className='grid-in-history' />
      <ProyectsComponent className='grid-in-proyect' />
      <FooterComponent className='grid-in-footer' />
    </main>
  )
}

/*
Resivar que el grid esté bien esructurado para poder poner
el siguiente codigo en el main del page:
  grid
    grid-areas-layout
    grid-rows-layout
*/