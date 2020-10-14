const db = require('../database/db');

module.exports = class Posts {
  constructor(id, fandomId, media, mediaCaption, mediaAlt, mediaCredit, uploaded, uploader) {
    this.id = id;
    this.fandomId = fandomId;
    this.media = media;
    this.mediaCaption = mediaCaption;
    this.mediaAlt = mediaAlt;
    this.mediaCredit = mediaCredit;
    this.uploaded = uploaded;
    this.uploader = uploader;
  }

  static fetchNextId() {
    return db.execute('SELECT * FROM images WHERE id = ?');
  }

  static fetch(id) {
    return db.execute('SELECT * FROM images WHERE id = ?', [id]);
  }

  static fetchAll() {
    return db.execute('SELECT * FROM images');
  }

  static fetchAllOfFandom(fandomId) {
    return db.execute('SELECT * FROM images WHERE fandomId = ?', [fandomId]);
  }

  static post(fandomId,  media, mediaCaption, mediaAlt, mediaCredit, uploader) {
    return db.execute('INSERT INTO images (fandomId,  media, mediaCaption, mediaAlt, mediaCredit, uploader) VALUES (?, ?, ?, ?, ?, ?)', [fandomId,  media, mediaCaption, mediaAlt, mediaCredit, uploader]);
  }
  
  static update(id, mediaCaption, mediaAlt, mediaCredit, uploaded) {
    return db.execute('UPDATE images SET mediaCaption = ?, mediaAlt = ?, mediaCredit = ?, uploaded = ?, uploader = ? WHERE id = ? ', [mediaCaption, mediaAlt, mediaCredit, uploaded, uploader, id]);
  }

  static delete(id) {
    return db.execute('DELETE FROM images WHERE id = ?', [id]);
  }
}