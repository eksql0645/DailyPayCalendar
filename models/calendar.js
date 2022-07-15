const Sequelize = require('sequelize');

module.exports = class Calendar extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        work_day: { type: Sequelize.DATEONLY, allowNull: false },
        unit: { type: Sequelize.FLOAT, allowNull: true },
        memo: { type: Sequelize.STRING(100), allowNull: true },
        color: {
          type: Sequelize.STRING(10),
          allowNull: true,
          defaultValue: '#d7e4f7',
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'Calendar',
        tableName: 'calendars',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
  // 테이블 간 관계 정립
  static associate(db) {
    db.Calendar.belongsTo(db.User, {
      foreignKey: 'cal_worker',
      targetKey: 'id',
    });
    db.Calendar.belongsToMany(db.WorkTag, {
      through: 'CalendarWorkTag',
    });
  }
};
