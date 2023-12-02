import { ChangeEvent } from 'react'
import './Filters.css'
import { useFilters } from '../../hooks/useFilters'
import targetList from '../../__mocks__/targetList.json'
import equipmentList from '../../__mocks__/equipmentList.json'

export function Filters() {

  const { setFilters } = useFilters()


  const handleInputChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilters((prevState: any) => (
      {
        ...prevState,
        [event.target.name]: event.target.value
      }
    ))
  }

  return (
    <section className="filters">

      <div>
        <label htmlFor="Target" > Target Muscle:</label>
        <select id="Target" name='target' onChange={handleInputChange}>
          <option value=''>All Parts</option>

          {
            targetList.map((target) => (
              <option key={target} value={target}>{target}</option>
            )
            )
          }

        </select>
      </div>

      <div>
        <label htmlFor="equipment" > Equipment:</label>
        <select id="equipment" name='equipment' onChange={handleInputChange}>
          <option value=''>All Equipments</option>

          {
            equipmentList.map((equipment) => (
              <option key={equipment} value={equipment}>{equipment}</option>
            )
            )
          }

        </select>
      </div>



    </section>
  )
}