import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  edoradoMarineImages = [
    { src: '../../assets/EdoradoPictures/Picture1.jpg', alt: 'Image 1', caption: 'Possible design: Implement the dashboard using AWS S3 and AWS Aurora.' },
    { src: '../../assets/EdoradoPictures/Picture2.jpg', alt: 'Image 2', caption: 'Possible design: Implement the dashboard using AWS S3, AWS Glue and AWS Athena.' },
    { src: '../../assets/EdoradoPictures/Picture3.jpg', alt: 'Image 3', caption: 'Chosen design: Implement the dashboard using the ELK Stack.' },
    { src: '../../assets/EdoradoPictures/Picture4.jpg', alt: 'Image 4', caption: 'Kibana table containing log files and max values.' },
    { src: '../../assets/EdoradoPictures/Picture5.jpg', alt: 'Image 5', caption: 'Kibana graph for a specific file showing the speed and height of the boat over time.' },
    { src: '../../assets/EdoradoPictures/Picture6.jpg', alt: 'Image 6', caption: 'Example of a log file.' },
    { src: '../../assets/EdoradoPictures/Picture7.jpg', alt: 'Image 7', caption: 'Logger release on Docker.' },
  ];

  automataAndLogicEngineering = [
    { src: '../../assets/AutomataAndLogicEngineering/Picture1.png', alt: 'Image 1', caption: 'Example 1: Automaton with 7 states NDFA.' },
    { src: '../../assets/AutomataAndLogicEngineering/Picture2.png', alt: 'Image 2', caption: 'Example 1: Automaton with 7 states converted to DFA.' },
    { src: '../../assets/AutomataAndLogicEngineering/Picture3.png', alt: 'Image 3', caption: 'First image' },
    { src: '../../assets/AutomataAndLogicEngineering/Picture4.png', alt: 'Image 4', caption: 'First image' },
    { src: '../../assets/AutomataAndLogicEngineering/Picture5.png', alt: 'Image 5', caption: 'First image' },
  ];
}
