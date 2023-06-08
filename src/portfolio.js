// Array of project objects
const projects = [
    {
      title: 'Question Answering on Multi-docs (TV Series)',
      description: 'Hugging face spaces hosted application that allows question answering on Ted Lasso season 1 scripts. It’s developed using LangChain with using GPT3.5',
      link: '#'
    },
    {
      title: 'Question Answering on Movie Script',
      description: 'Hugging Face Spaces hosted question answering application using LangChain and OpenAI.',
      link: '#'
    },
    {
      title: 'Marketing Email Generation',
      description: 'A fine-tuned Bloom 1b1 model to generate content for marketing emails.',
      link: '#'
    }
  ];
  
  // Generate portfolio cards dynamically
  function generatePortfolioCards() {
    const portfolioContainer = document.getElementById('portfolio-container');
    
    projects.forEach((project) => {
      const card = document.createElement('div');
      card.classList.add('portfolio-card');
      
      const title = document.createElement('h4');
      title.classList.add('project-title');
      title.textContent = project.title;
  
      const description = document.createElement('p');
      description.textContent = project.description;
  
      const link = document.createElement('a');
      link.classList.add('project-link');
      link.href = project.link;
      link.textContent = 'View Project';
  
      card.appendChild(title);
      card.appendChild(description);
      card.appendChild(link);
      alert(project.title)
      portfolioContainer.appendChild(card);
      
    });
  }
  
  // Call the function to generate portfolio cards
  generatePortfolioCards();
  