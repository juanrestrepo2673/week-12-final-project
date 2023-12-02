import Exercises from './components/Exercises/Exercises'
import Routine from './components/Routine/Routine'
import { useFilters } from './hooks/useFilters'
import { Filters } from './components/Filters/Filters'
import Layout from './components/Layout/Layout'


function App() {
  const { filteredExercises } = useFilters()

  return (
    <Layout>
      <Exercises exercises={filteredExercises} >
        <Filters />
      </Exercises>
      <Routine />
    </Layout>
  )
}

export default App
