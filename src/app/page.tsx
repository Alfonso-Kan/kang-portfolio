import NavbarComponent from './Components/NavBarComponent';
import ProfileComponent from './Components/ProfileComponent'
import FormationComponent from './Components/FormationComponent'

export default function Page() {
  return (
    <main className={`
    w-full
    bg-kang-gray-900
    grid
    grid-areas-layout
    overflow-x-hidden
    `}>
      <NavbarComponent className='grid-in-navbar fixed mt-9 m-2 z-10'  />
      <ProfileComponent className='grid-in-profile' />
      <FormationComponent className='grid-in-formation' />
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