import { useEffect, useState } from "react";
import { GetPropertyDetailsRequest, GetPropertyDetailsResponseDto, SearchPropertyResultDto } from "../_generated-openapi/data-contracts";
import { getDetailsClient } from "../api/api";

export const usePropertyDetails = (selectedProperty: SearchPropertyResultDto) => {
    const [details, setDetails ] = useState<GetPropertyDetailsResponseDto | null>(null);

    useEffect(() => {
        const fn = (async() => {
          const request : GetPropertyDetailsRequest = {
            city: selectedProperty.city!,
            suburb: selectedProperty.suburb!,
            address: selectedProperty.address!,
            streetNumber: selectedProperty.streetNumber!
          }
          const details = (await getDetailsClient.getDetailsCreate(request)).data;
          setDetails(details);
        });
        fn();
      }, [selectedProperty]);

    return details;
}