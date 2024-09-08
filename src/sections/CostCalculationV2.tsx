import { useLocation } from 'react-router-dom';
import { SearchPropertyResultDto } from '../_generated-openapi/data-contracts';
import { usePropertyDetails } from '../hooks/usePropertyDetails';

export type CostCalculationState = { selectedProperty: SearchPropertyResultDto }

const CostCalculation = () => {
  const location  = useLocation();
  const selectedProperty = (location.state as CostCalculationState).selectedProperty;

  console.log("Showing cost calculation for property: ", selectedProperty);

  const propertyDetails = usePropertyDetails(selectedProperty);

  if (propertyDetails == null) {
    <div>Loading...</div>
  }

  return (
    <div>
      { JSON.stringify(propertyDetails, null, 2) }
    </div>
  )
}

export default CostCalculation
