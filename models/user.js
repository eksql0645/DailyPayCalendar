const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        email: { type: Sequelize.STRING(15), allowNull: false, unique: true },
        password: { type: Sequelize.INTEGER, allowNull: false },
        nick_name: { type: Sequelize.STRING(10), allowNull: true },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'User',
        tableName: 'users',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
  // 테이블 간 관계 정립
  static associate(db) {
    db.User.hasMany(db.Calendar, { foreignKey: 'cal_worker', sourceKey: 'id' });
    db.User.hasMany(db.WorkTag, {
      foreignKey: 'tag_worker',
      sourceKey: 'id',
    });
    db.User.hasOne(db.WorkInfo, { foreignKey: 'work_worker', sourceKey: 'id' });
  }
};
