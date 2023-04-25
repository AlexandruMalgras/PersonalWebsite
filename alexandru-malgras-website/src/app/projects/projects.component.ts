import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  edoradoMarineImages = [
    { src: '../../assets/EdoradoPictures/Picture1.jpg', alt: 'Image 1', caption: 'First image' },
    { src: '../../assets/EdoradoPictures/Picture2.jpg', alt: 'Image 2', caption: 'Second image' },
    { src: '../../assets/EdoradoPictures/Picture3.jpg', alt: 'Image 3', caption: 'First image' },
    { src: '../../assets/EdoradoPictures/Picture4.jpg', alt: 'Image 4', caption: 'First image' },
    { src: '../../assets/EdoradoPictures/Picture5.jpg', alt: 'Image 5', caption: 'First image' },
    { src: '../../assets/EdoradoPictures/Picture6.jpg', alt: 'Image 6', caption: 'First image' },
    { src: '../../assets/EdoradoPictures/Picture7.jpg', alt: 'Image 7', caption: 'First image' },
  ];

  arduinoDevelopmentImages = [
    { src: '../../assets/ArduinoDevelopment/Picture1.jpg', alt: 'Image 1', caption: 'First image' },
    { src: '../../assets/ArduinoDevelopment/Picture2.jpg', alt: 'Image 2', caption: 'First image' },
  ];

  automataAndLogicEngineering = [
    { src: '../../assets/AutomataAndLogicEngineering/Picture1.png', alt: 'Image 1', caption: 'First image' },
    { src: '../../assets/AutomataAndLogicEngineering/Picture2.png', alt: 'Image 2', caption: 'First image' },
    { src: '../../assets/AutomataAndLogicEngineering/Picture3.png', alt: 'Image 3', caption: 'First image' },
    { src: '../../assets/AutomataAndLogicEngineering/Picture4.png', alt: 'Image 4', caption: 'First image' },
    { src: '../../assets/AutomataAndLogicEngineering/Picture5.png', alt: 'Image 5', caption: 'First image' },
  ];
}
