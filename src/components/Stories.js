import React, { useState, useEffect } from 'react';
import './Stories.css';
import { supabase } from '../config/supabaseClient';

const Stories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('stories')
        .select('*')
        .limit(6)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setStories(data || []);
    } catch (error) {
      console.error('Error fetching stories:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="stories" className="stories-section">
      <div className="stories-container">
        <div className="section-header">
          <h2 className="section-title">Featured Stories</h2>
          <p className="section-subtitle">Handpicked narratives that resonate with the soul</p>
        </div>

        {loading ? (
          <div className="loading-message">Loading stories...</div>
        ) : stories.length === 0 ? (
          <div className="empty-message">
            <p>No stories yet. Start creating your first story!</p>
          </div>
        ) : (
          <div className="stories-grid">
            {stories.map((story, index) => (
              <article key={story.id} className="story-card" style={{ animationDelay: `${index * 0.1}s` }}>
                {story.image_url && (
                  <div className="story-image">
                    <img src={story.image_url} alt={story.title} />
                    <div className="image-overlay"></div>
                  </div>
                )}
                <div className="story-content">
                  <span className="story-category">{story.category || 'Editorial'}</span>
                  <h3 className="story-title">{story.title}</h3>
                  <p className="story-excerpt">{story.excerpt || story.content?.substring(0, 100)}...</p>
                  <div className="story-footer">
                    <span className="story-author">{story.author || 'Anonymous'}</span>
                    <span className="story-date">
                      {new Date(story.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="view-all">
          <button className="btn-view-all">View All Stories</button>
        </div>
      </div>
    </section>
  );
};

export default Stories;
