import React from 'react';
import './styles/App.css';

const topicData = [
  { title: '#VideoUpload', image: 'Videoupload.jpg' },
  { title: '#Audio Extractor', image: 'Audioextractor.jpg' },
  { title: '#Audio Splitter', image: 'audiosplitter.jpg' },
  { title: '#Speech Recognition', image: 'speechrecognition.jpg' },
  { title: '#Text Translation', image: 'texttranslation.jpg' },
  { title: '#Text to Speech', image: 'texttospeech.jpg' },
  { title: '#Audio Reconstruction', image: 'audioreconstruction.jpg' },
  { title: '#Final Video', image: 'finalvideo.jpg' },
  { title: '#Jingles', image: 'jingles.jpg' },
  { title: '#Avatar', image: 'avatar.jpg' },
  { title: '#Animation', image: 'animation.jpg' },
  { title: '#Image Generation', image: 'imagegeneration.jpg' },
  { title: '#Image Analysis', image: 'imageanalysis.jpg' },
  { title: '#Action Recognition', image: 'actionrecognition.jpg' },
  { title: '#Object Identification', image: 'objectidentification.jpg' },
];

function App() {
  return (
    <div className="app">
      <h1>Click on one of the topics below to proceed</h1>
      <div className="grid">
        {topicData.map((topic, index) => (
          <div key={index} className="card" style={{ backgroundImage: `url(${topic.image})` }}>
            <p>{topic.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;