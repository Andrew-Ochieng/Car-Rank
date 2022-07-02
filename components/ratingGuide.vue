<template>
    <div>

        <div class="w-full flex justify-center mx-auto mt-4 mb-16">
            <div class="flex flex-col">
                <div class="w-full">
                    <div class="border-b border-gray-200 shadow">
                        <table>
                            <thead class="bg-blue-100">
                                <tr>
                                    <th class="p-2 text-xs text-gray-500">
                                        Engine Condition
                                    </th>
                                    <th class="p-2 text-xs text-gray-500">
                                        Body
                                    </th>
                                    <th class="p-2 text-xs text-gray-500">
                                        Mileage
                                    </th>
                                    <th class="p-2 text-xs text-gray-500">
                                        Tires
                                    </th>
                                    <th class="p-2 text-xs text-gray-500">
                                        Steering
                                    </th>
                                    <th class="p-2 text-xs text-gray-500">
                                        Electric condition
                                    </th>
                                    <th class="p-2 text-xs text-gray-500">
                                        Fuel Type
                                    </th>
                                    <th class="p-2 text-xs text-gray-500">
                                        Suspension
                                    </th>
                                    <th class="p-2 text-xs text-gray-500">
                                        Interior
                                    </th>
                                    <th class="p-2 text-xs text-gray-500">
                                        Transmission
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white">
                                <tr v-for="rates in rates" class="whitespace-nowrap">
                                    <td class="p-2 text-sm text-gray-500">
                                        {{rates.engine}}
                                    </td>
                                    <td class="p-2">
                                        <div class="text-sm text-gray-500">
                                            {{rates.body}}
                                        </div>
                                    </td>
                                    <td class="p-2">
                                        <div class="text-sm text-gray-500">
                                            {{rates.mileage}}
                                        </div>
                                    </td>
                                    <td class="p-2 text-sm text-gray-500">
                                        {{rates.tires}}
                                    </td>
                                    <td class="p-2 text-sm text-gray-500">
                                        {{rates.steering}}
                                    </td>
                                    <td class="p-2">
                                        <div class="text-sm text-gray-500">
                                            {{rates.electrical}}
                                        </div>
                                    </td>
                                    <td class="p-2">
                                        <div class="text-sm text-gray-500">
                                            {{rates.fuelType}}
                                        </div>
                                    </td>
                                    <td class="p-2 text-sm text-gray-500">
                                        {{rates.suspension}}
                                    </td>
                                    <td class="p-2 text-sm text-gray-500">
                                        {{rates.interior}}
                                    </td>
                                    <td class="p-2">
                                        <div class="text-sm text-gray-500">
                                            {{rates.transmission    }}
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                // columns: [
                //     {col: 'Engine Condition'}, 
                //     {col1: 'Body'}, 
                //     {col2: 'Mileage'},
                //     {col3: 'Tires'}, 
                //     {col4: 'Steering'}, 
                //     {col5: 'Electric condition'}, 
                //     {col6: 'Fuel Type'}, 
                //     {col7: 'Suspension'}, 
                //     {col8: 'Interior'}, 
                //     {col9: 'Transmission'}
                // ],

                rates: [
                    {engine: 'Noises', body: 'Bonnet', mileage: '150,000KM+', tires:'Rotation', steering: 'Power Steering Fluid Level', electrical: 'Fog lights', fuelType: 'Battery powered', suspension: 'Shocks', interior: 'Roof Rear', transmission: 'Noises'},
                    {engine: 'Leaks', body: 'Paint', mileage: '150,000-100,000KM', tires:'Balance', steering: 'Wear', electrical: 'Indicators Lights', fuelType: 'Petrol', suspension: 'Sway Bar', interior: 'Rear View Mirror', transmission: 'Leaks'},
                    {engine: 'Corrosion', body: 'Trunk', mileage: '99,999-50,000KM', tires:'Wear', steering: 'Play', electrical: 'Hazard Lights', fuelType: 'Diesel', suspension: 'Looseness', interior: 'Visors', transmission: 'Transmission Housing'},
                    {engine: 'Belts', body: 'Cowl Panel', mileage: '49,999-1KM', tires:'Alignment', steering: 'Shaft', electrical: 'Parking Lights', fuelType: 'Solar powered', suspension: 'Cracks', interior: 'Head Rests', transmission: 'Transfer Box'},
                    {engine: 'Hoses', body: 'Fenders', mileage: '', tires:'', steering: 'Leaks', electrical: 'Reverse Lights', fuelType: '', suspension: 'Wear', interior: 'Seats', transmission: 'Propellor shaft'},
                    {engine: 'Noises', body: 'Mirrors', mileage: '', tires:'', steering: 'Noises', electrical: 'Headlamps', fuelType: '', suspension: 'Ball Joints', interior: 'Door Handles', transmission: 'Diffferential'},
                    {engine: 'Efficiency', body: 'Front Wind Shield', mileage: '', tires:'', steering: '', electrical: 'Interior Lights', fuelType: '', suspension: 'Noise', interior: 'Air Vents', transmission: 'Axels'},
                    {engine: 'Gear power', body: 'Rear Wind Shield', mileage: '', tires:'', steering: '', electrical: 'Dashboard', fuelType: '', suspension: 'Play', interior: 'Dashboards', transmission: 'Pressure plates'},
                    {engine: 'Engine knock', body: 'Front doors', mileage: '', tires:'', steering: '', electrical: 'Headlamps', fuelType: '', suspension: '', interior: 'Floor Carpet', transmission: 'Electronic Clutch'},
                    {engine: 'Exhaust Gas Quality', body: 'Rear doors', mileage: '', tires:'', steering: '', electrical: 'Starter', fuelType: '', suspension: '', interior: '', transmission: 'Transaxle'},

                ]
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>