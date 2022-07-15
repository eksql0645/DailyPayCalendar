const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        work_type: { type: Sequelize.STRING(5), allowNull: false },
        unit: { type: Sequelize.FLOAT, allowNull: false },
        color: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: '#d7e4f7',
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'WorkTag',
        tableName: 'workTags',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
  // 테이블 간 관계 정립
  static associate(db) {
    db.WorkTag.belongTo(db.User, {
      foreignKey: 'tag_worker',
      targetKey: 'id',
    });
    db.WorkTag.belongToMany(db.Calendar, {
      through: 'CalendarWorkTag',
    });
  }
};
