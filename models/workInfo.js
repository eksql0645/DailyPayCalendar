const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        initial_pay: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        initial_unit: { type: Sequelize.FLOAT, allowNull: false },
        work_start: { type: Sequelize.DATEONLY, allowNull: false },
        work_end: { type: Sequelize.DATEONLY, allowNull: false },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'WorkInfo',
        tableName: 'workInfos',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
  // 테이블 간 관계 정립
  static associate(db) {
    db.WorkInfo.belongsTo(db.User, {
      foreignKey: 'work_worker',
      sourceKey: 'id',
    });
  }
};
