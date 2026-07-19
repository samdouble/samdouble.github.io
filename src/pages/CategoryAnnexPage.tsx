import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PostMarkdown from 'components/posts/PostMarkdown';
import { LanguageContext } from 'services/contexts';
import { Category } from 'utils/types';
import content from 'content.json';

function CategoryAnnexPage() {
  const [text, setText] = useState<string>('');
    const navigate = useNavigate();
  const { id, page } = useParams();
  const category: Category | undefined = content.categories.find(cat => cat.id === id);
  const annexPages = category?.annexPages;
  const annexPage = annexPages?.find(p => p.key === page);
  if (!annexPage) {
    navigate('/404');
  }

  const language = useContext(LanguageContext);
  const annexPageLanguageInfo = annexPage?.translation.find(t => t.language === language);

  useEffect(() => {
    if (annexPageLanguageInfo) {
      try {
        fetch(`/assets/${annexPageLanguageInfo.path}`)
          .then(response => response.text())
          .then(responseText => setText(responseText));
      } catch {
        navigate('/404');
      }
    }
  }, [language]);

  return (
    <div
      className="page-container"
      style={{
        paddingTop: 30,
        textAlign: 'left',
      }}
    >
      <h2>{annexPageLanguageInfo?.title}</h2>
      <PostMarkdown>
        {text}
      </PostMarkdown>
    </div>
  );
}

export default CategoryAnnexPage;
