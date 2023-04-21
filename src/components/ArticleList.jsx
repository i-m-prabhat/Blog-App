import React from 'react';
import ArticleCard from './ArticleCard';

const ArticleList = ({ articles, categories, tags, filters, onFilterChange }) =>
{
    const filteredArticles = articles.filter((article) =>
    {
        if (filters.category && !article.categories.includes(filters.category))
        {
            return false;
        }
        if (filters.tag && !article.tags.includes(filters.tag))
        {
            return false;
        }
        return true;
    });

    const handleFilterChange = (filterType, value) =>
    {
        const newFilters = { ...filters, [filterType]: value };
        onFilterChange(newFilters);
    }

    return (
        <div className="container mx-auto my-10">
            <div className="flex flex-col md:flex-row items-start justify-between mb-5">
                <h1 className="text-4xl font-bold mb-5">Articles</h1>
                <div className="flex items-center">
                    <label htmlFor="category" className="block mr-3 font-bold text-gray-700">Category:</label>
                    <select id="category" value={filters.category} onChange={(e) => handleFilterChange('category', e.target.value)} className="border-2 border-gray-300 rounded-md p-2">
                        <option value="">All</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                    <label htmlFor="tag" className="block ml-5 mr-3 font-bold text-gray-700">Tag:</label>
                    <select id="tag" value={filters.tag} onChange={(e) => handleFilterChange('tag', e.target.value)} className="border-2 border-gray-300 rounded-md p-2">
                        <option value="">All</option>
                        {tags.map((tag) => (
                            <option key={tag} value={tag}>{tag}</option>
                        ))}
                    </select>
                </div>
            </div>
            {filteredArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredArticles.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
            ) : (
                <p>No articles found.</p>
            )}
        </div>
    );
}

export default ArticleList;
