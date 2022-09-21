from typing_extensions import Required
from django.db import models
from django.utils.translation import gettext as _


def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)


class Character(models.Model):
    character_id = models.IntegerField()
    name = models.CharField(max_length=100)
    thumbnail = models.ImageField(upload_to=upload_to, null=True)

    def __str__(self):
        return self.name


# class AndyMoveListTransfer(models.Model):
#     move = models.CharField(_("move"), max_length=200, null=True),
#     # attack_type = models.CharField(_("attack type"), max_length=20, blank=True),
#     damage = models.IntegerField(_("damage"), null=True),
#     stun = models.IntegerField(_("stun")),
#     startup = models.IntegerField(_("startup")),
#     guard_adv = models.IntegerField(_("guard advantage"), null=True),
#     comment = models.CharField(_("comment"), max_length=500, blank=True)


class MoveList(models.Model):
    character_id = models.ForeignKey(
        Character, on_delete=models.CASCADE, null=True, blank=True, related_name='move_list')
    img = models.ImageField(null=True, blank=True)
    move = models.CharField(_("move"), max_length=200, null=True)
    damage = models.CharField(_("damage"), null=True, max_length=50)
    stun = models.CharField(_("stun"), max_length=10, null=True, default=None)
    startup = models.CharField(
        _("startup"), max_length=100, null=True, default=None)
    guard_adv = models.CharField(
        _("guard advantage"), max_length=100, null=True)
    comment = models.CharField(
        _("comment"), max_length=500, null=True, blank=True, default=None)
