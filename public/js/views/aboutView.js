export default {
  title: 'About',
  icon: 'info',
  async mount(root) {
    root.innerHTML = `
    <h2 class="title">About the Projet</h2>
    
    <section class="grid">
    
    <!-- Project description & objectives-->
    <div class="span-12 card">
    <h2><strong>MOBIL'AIR</strong> Grenoble</h2>
    <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary);">
    <p>The objective of our project is to offer an interactive application, allowing residents of Grenoble, tourists, as well as local decision-makers (city hall, metropolitan authority, ...) to better understand how they can move around Grenoble, how the different areas of the city are equipped, and what impacts different modes of transport can have.</p>
    <p>To carry out our project, we will therefore use a map with different networks and clickable zones. We have given the user the possibility to select certain types of data, for example, to make the map as interactive and personalized as possible.</p>
    <p>In addition, our application is responsive, so it adapts to the user's screen size and they can choose to switch the page to dark mode.</p>
    </div>

    <!-- Data Processing -->
    <div class="span-12 card">
    <h2>Data Processing</h2>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: start;">
        <div style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary);">
        <h3 style="margin-top: 0; margin-bottom: 0.5rem;">Data sources:</h3>
        <ul style="margin: 0.5rem 0; padding-left: 1.5rem;">
            <li><strong>Parking:</strong> Real-time availability data, capacity, pricing</li>
            <li><strong>Public transport:</strong> Public transport lines (TAG), routes</li>
            <li><strong>Soft mobility:</strong> Bicycle counters, bike lanes, racks</li>
            <li><strong>Electric vehicles:</strong> EV charging stations (IRVE infrastructure)</li>
            <li><strong>Low Emission Zones (LEZ):</strong> Perimeters and roads of low emission zones</li>
            <li><strong>Air quality:</strong> Atmospheric quality and pollution data</li>
        </ul>
        
        <h3 style="margin-top: 1rem; margin-bottom: 0.5rem;">Processing pipeline:</h3>
        <ul style="margin: 0.5rem 0; padding-left: 1.5rem;">
            <li><strong>Cleaning:</strong> CSV format normalization, duplicate removal</li>
            <li><strong>Validation:</strong> Data consistency and completeness checks</li>
            <li><strong>Compression:</strong> GZIP optimization (77% space reduction) for faster loading</li>
            <li><strong>Integration:</strong> Merging multiple sources with schema harmonization</li>
            <li><strong>Visualization:</strong> Interactive display using D3.js and interactive maps</li>
        </ul>
        </div>
        
        <div style="text-align: center;">
        <img src="./assets/img/data_processing.png" alt="Data processing pipeline" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        </div>
    </div>
    </div>

    <!-- Methodology -->
    <div class="span-12 card">
    <h2>Approach and Methodology</h2>
    <div style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary);">
        <ol style="margin: 0.5rem 0; padding-left: 1.5rem;">
        <li><strong>Audit of available data:</strong> Identification of open and proprietary sources</li>
        <li><strong>Architecture design:</strong> Modeling of the visualization system</li>
        <li><strong>Pipeline development:</strong> Python scripts for data organization, transformation, and cleaning</li>
        <li><strong>Interface creation:</strong> Interactive and responsive dashboards</li>
        <li><strong>Analytical visualizations:</strong> Charts, maps, bubbles, and statistics</li>
        <li><strong>Performance optimization:</strong> Data size reduction, caching</li>
        <li><strong>Documentation and deployment:</strong> User guide and online launch</li>
        </ol>
    </div>
    </div>

    <! -- Visualization choices -->
    <div class="span-12 card">
    <h2>Visualization Choices</h2>
    <div style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary);">
        <h3 style="margin-top: 0; margin-bottom: 0.5rem;">1. Interactive Map:</h3>
        <p>The data we want to display are geolocated, such as transport lines and bike paths. We therefore opted for a map on the main page of our application.</p>
        <p>The geographic position allows for simple and clear reading for different users, directly providing them with the "where" and a simple analysis of the structure of mobility in Grenoble.</p>
        <p>Since our application is constrained by a maximum size of 10MB, choosing a vector map seemed the most appropriate solution to display a large amount of data without overloading the page, while maintaining good map readability. Vectors allow for sharp rendering at multiple zoom levels.</p>
        
        <h3 style="margin-top: 1rem; margin-bottom: 0.5rem;">2. Representation of data on the map:</h3>
        <ul style="margin: 0.5rem 0; padding-left: 1.5rem;">
        <li><h4>Linear data: bus and tram</h4></li>
        </ul>
        <p>For public transport lines, we chose to display bus and tram lines as colored lines on the map. Each line is represented by a distinct color, making it easier to identify the different routes.
        This linear representation allows users to quickly understand the public transport network and identify connections between different lines.</p>

        <ul style="margin: 0.5rem 0; padding-left: 1.5rem;">
        <li><h4>Point data: parking lots, bike counters, bike racks, charging stations, car and bike traffic flow</h4></li>
        </ul>
        <p>Charging stations and various facilities are located at specific points in Grenoble. We therefore represent them with circles of different colors and sizes, depending on their capacity. This allows for quick and intuitive identification while maintaining map readability.</p>
        <p>The user can click on these points to obtain more information, such as the number of available parking spaces.</p>

        <ul style="margin: 0.5rem 0; padding-left: 1.5rem;">
        <li><h4>Air Quality in Grenoble</h4></li>
        </ul>
        <p>The ATMO index is a quantitative metric that we represent by adding color gradients (from blue/green to red) on the map. By using different shades, users can easily analyze variations in air quality across Grenoble.</p>

        <ul style="margin: 0.5rem 0; padding-left: 1.5rem;">
        <li><h4>Map Interactions</h4></li>
        </ul>
        <p>We have integrated several types of interactions into our map. Users can enable or disable layers, zoom into specific areas, and access tooltips by clicking on elements. For additional details, they can also open a dedicated panel that provides further data and additional charts.</p>
        <p>These interactions make the map clearer, more informative, and better suited to different types of users.</p>

        <h3 style="margin-top: 1rem; margin-bottom: 0.5rem;">3. Chart Choices:</h3>
        <p>Charts allow analysis of the "how much," "how," and "why," which cannot be shown directly on the map, and allow comparisons and correlations.</p>

        <ul style="margin: 0.5rem 0; padding-left: 1.5rem;">
        <li><h4>Histogram</h4></li>
        </ul>
        <p>We used histograms to compare transport lines, bike lanes, and air quality. Histograms are the most effective charts for visually comparing values.</p>

        <ul style="margin: 0.5rem 0; padding-left: 1.5rem;">
        <li><h4>Line charts</h4></li>
        </ul>
        <p>Line charts allow us to track the evolution of bike traffic flow and air quality. They are best suited for time series data and trend analysis.</p>

        <ul style="margin: 0.5rem 0; padding-left: 1.5rem;">
        <li><h4>Spider chart</h4></li>
        </ul>
        <p>Filterable by district, this chart allows comparison across Grenoble neighborhoods on multiple dimensions (number of racks/bike lanes, parking spaces, air quality...). It enables quick visual identification of areas performing well in soft mobility.</p>

        <ul style="margin: 0.5rem 0; padding-left: 1.5rem;">
        <li><h4>Sankey Diagram</h4></li>
        </ul>
        <p>This diagram represents flows between categories, helping visualize relationships and transfers between them. Users can understand how mobility flows are distributed across areas or transport modes.</p>

        <ul style="margin: 0.5rem 0; padding-left: 1.5rem;">
        <li><h4>Calendar Heatmap</h4></li>
        </ul>
        <p>This chart is used to represent air quality. It makes it easy to identify temporal trends, such as pollution peaks in winter over multiple years.</p>
    </div>
    </div>

    <!-- Data URLs -->
    <div class="span-12 card">
    <h2>Sources of Data Used</h2>
    <ul style="margin: 0.5rem 0; padding-left: 1.5rem;">
        <li><a href="https://grenoble-backoffice.data4citizen.com/dataset/lignes-de-transport-du-reseau-tag" target="_blank" rel="noopener">Tram/bus lines</a></li>
        <li><a href="https://grenoble-backoffice.data4citizen.com/dataset/pcm" target="_blank" rel="noopener">Bike lanes</a></li>
        <li><a href="https://grenoble-backoffice.data4citizen.com/dataset/bornes-de-recharge-pour-vehicules-electriques" target="_blank" rel="noopener">EV charging stations</a></li>
        <li><a href="https://grenoble-backoffice.data4citizen.com/dataset/emplacements-cite-lib" target="_blank" rel="noopener">Car-sharing parking (Citiz)</a></li>
        <li><a href="https://backend.citiz.fr/public/provider/5/gbfs/v3.0/vehicle_status.json" target="_blank" rel="noopener">Car-sharing availability</a></li>
        <li><a href="https://grenoble-backoffice.data4citizen.com/dataset/parkings" target="_blank" rel="noopener">Bike/e-scooter parking</a></li>
        <li><a href="https://grenoble-backoffice.data4citizen.com/dataset/trottinettes-en-libre-service" target="_blank" rel="noopener">Scooter availability</a></li>
        <li><a href="https://grenoble-backoffice.data4citizen.com/dataset/velos-en-libre-service" target="_blank" rel="noopener">Bike availability</a></li>
        <li><a href="https://grenoble-backoffice.data4citizen.com/dataset/les_arceaux_a_velo_sur_le_territoire_de_grenoble" target="_blank" rel="noopener">Bike racks</a></li>
        <li><a href="https://aqicn.org/" target="_blank" rel="noopener">AQIcn</a></li>
        <li><a href="https://sensor.community/en/" target="_blank" rel="noopener">Air quality</a></li>
        <li><a href="https://grenoble-backoffice.data4citizen.com/dataset/places-disponibles-en-temps-reel-des-parkings-relais-p-r" target="_blank" rel="noopener">Park-and-ride (availability)</a></li>
        <li><a href="https://grenoble-backoffice.data4citizen.com/dataset/resultats_de_l_observatoire_des_comptages_de_mobilite" target="_blank" rel="noopener">Car/bike traffic counts</a></li>
        <li><a href="https://data.metropolegrenoble.fr/visualisation/table/?id=les-unions-de-quartier" target="_blank" rel="noopener">Grenoble neighborhoods</a></li>
        <li><a href="https://data.mobilites-m.fr/" target="_blank" rel="noopener">Transport lines</a></li>
        <li><a href="https://react-icons.github.io/react-icons/" target="_blank" rel="noopener">SVG icons</a></li>
    </ul>
    </div>

    <!-- Future perspectives and improvements -->
    <div class="span-12 card">
    <h2>Future Perspectives and Improvements</h2>
    <div style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary);">
        
        <h3 style="margin-top: 1rem; margin-bottom: 0.5rem;">New data to integrate:</h3>
        <ul style="margin: 0.5rem 0; padding-left: 1.5rem;">
        <li><strong>Meteorological data:</strong> Temperature, humidity, wind speed to analyze their impact on mobility and air quality</li>
        <li><strong>Advanced sensor data:</strong> Additional IoT sensors to enrich pollution and traffic flow measurements</li>
        <li><strong>Real-time data:</strong> Risk anticipation integration (pollution peaks, predicted congestion, weather alerts)</li>
        </ul>

        <h3 style="margin-top: 1rem; margin-bottom: 0.5rem;">Quality control and validation:</h3>
        <ul style="margin: 0.5rem 0; padding-left: 1.5rem;">
        <li><strong>Quality control tests:</strong> Implementation of automated checks to validate data consistency and integrity</li>
        <li><strong>Anomaly detection:</strong> Algorithms to detect and report inconsistent or missing data</li>
        <li><strong>Data auditing:</strong> Regular source verification to ensure reliability</li>
        </ul>

        <h3 style="margin-top: 1rem; margin-bottom: 0.5rem;">Enriched visualizations:</h3>
        <ul style="margin: 0.5rem 0; padding-left: 1.5rem;">
        <li><strong>Correlation charts:</strong> Interactive scatter plots to explore relationships (e.g., pollution vs traffic flow)</li>
        <li><strong>Advanced comparison charts:</strong> Multi-dimensional comparison tools across zones, time periods, and transport modes</li>
        <li><strong>Predictions:</strong> Predictive models based on historical trends</li>
        <li><strong>Temporal heatmaps:</strong> Visualizing variations over 24h, 7d, or 365d</li>
        </ul>

        <h3 style="margin-top: 1rem; margin-bottom: 0.5rem;">Additional data collection:</h3>
        <ul style="margin: 0.5rem 0; padding-left: 1.5rem;">
        <li><strong>Source expansion:</strong> Actively integrating additional data providers (local authorities, mobility operators, weather stations)</li>
        <li><strong>Partner requests:</strong> Collaboration with Grenoble Métropole, TAG, and City Hall for better datasets</li>
        <li><strong>Real-time APIs:</strong> Direct connections to APIs for continuous updates</li>
        </ul>
    </div>
    </div>


    </section>
    `;

    return () => {};
  }
};
