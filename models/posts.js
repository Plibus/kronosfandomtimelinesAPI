const db = require('../database/db');

module.exports = class Posts {
  constructor(id, fandomId, type, catagory, theme, name, description, created, updated, creator, updator, likes, views, data, active) {
    this.id = id;
    this.fandomId = fandomId;
    this.type = type;
    this.catagory = catagory;
    this.theme = theme;
    this.name = name;
    this.description = description;
    this.created = created;
    this.updated = updated;
    this.creator = creator;
    this.updator = updator;
    this.likes = likes;
    this.views = views;
    this.data = data;
    this.active = active;
  }

  static fetch(id) {
    return db.execute('SELECT * FROM posts WHERE id = ?', [id]);
  }

  static fetchAll() {
    return db.execute('SELECT * FROM posts ORDER BY updated');
  }

  static fetchAllOfFandom(fandomId) {
    return db.execute('SELECT * FROM posts WHERE fandomId = ? AND type != "fandom" ORDER BY updated', [fandomId]);
  }

  static fetchAllOf(type) {
    return db.execute('SELECT * FROM posts WHERE type = ? ORDER BY updated', [type]);
  }

  static fetchAllOfFromFandomOfType(id, type) {
    return db.execute('SELECT * FROM posts WHERE fandomId = ? AND catagory = ? ORDER BY updated', [id, type]);
  }

  static post(fandomId, type, catagory, theme, name, description, creator, updator, data) {
    return db.execute('INSERT INTO posts (fandomId, type, catagory, theme, name, description, creator, updator, data) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [fandomId, type, catagory, theme, name, description, creator, updator, data]);
  }
  
  static update(id, theme, name, description, updator, data) {
    return db.execute('UPDATE posts SET theme = ?, name = ?, description = ?, updator = ?, updated = NOW(), data = ? WHERE id = ? ', [theme, name, description, updator, data, id]);
  }

  static updateLikes(id) {
    return db.execute('UPDATE posts SET likes=likes+1 WHERE id = ?', [id]);
  }

  static updateViews(id) {
    return db.execute('UPDATE posts SET views=views+1 WHERE id = ?', [id]);
  }

  static delete(id) {
    return db.execute('DELETE FROM posts WHERE id = ?', [id]);
  }
  
};